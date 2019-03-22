import normalize from 'jsonapi-normalizer';

import {
  ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS,
  FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS,
  SORT_COURSES_IN_UI_REQUEST, SORT_COURSES_IN_UI_SUCCESS
} from './types';

import { convertBoolToNumber, formatDate } from '../helpers';
import { updateCoursesWithIcons } from '../helpers/courses';

export const fetchCoursesUserInfo = ids => async (dispatch, getState, api) => {
  const formattedParams = ids.map(id => ({
    id: [id],
    type: 'Course'
  }));
  const res = await api.post('/user_info/load', { icons: formattedParams });
  return res.data.icons;
};

export const fetchCourses = params => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_COURSES_REQUEST });

  await api.get('/courses', { params })
    .then(({ data }) => {
      const courses = normalize(data);
      const { meta } = data;

      const coursesWithIcons = updateCoursesWithIcons(
        courses.entities.course,
        Object.entries(meta.permittedContentCount)
      );

      courses.entities.category = coursesWithIcons;

      if (courses.result.course) {
        dispatch(fetchCoursesUserInfo(courses.result.course)).then((icons) => {
          icons.forEach((icon) => {
            courses.entities.category[icon.id].statuses = {
              purchase: icon.statuses.purchase
            };
          });
          dispatch({
            type: FETCH_COURSES_SUCCESS,
            payload: {
              courses,
              accountBanner: meta.accountBanner,
              coursesDescriptionText: meta.coursesDescriptionText
            }
          });
        });
      } else {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: {
            courses,
            accountBanner: meta.accountBanner,
            coursesDescriptionText: meta.coursesDescriptionText
          }
        });
      }
    });
};

export const addCourse = data => async (dispatch, getState, api) => {
  dispatch({ type: ADD_COURSE_REQUEST });

  let sellableItems;
  if (data.selectedSellableItems) {
    sellableItems = {
      example_index: {
        sellable: '0',
        group_id: '',
        group_name: '',
        prices_attributes: {
          0: {
            currency: 'usd'
          }
        }
      }
    };
    Object.values(data.selectedSellableItems).forEach((item, index) => {
      sellableItems[index] = {
        sellable: convertBoolToNumber(item.sellable),
        group_id: item.groupId,
        group_name: item.groupName,
        price_attributes: item.pricesAttributes
      };
    });
  }

  await api.post('/courses', {
    course: {
      active: convertBoolToNumber(data.active),
      name: data.name,
      description: data.descriprion,
      cover_photo_url: data.coverPhotoUrl,
      cover_description: data.coverDescription,
      category_ids: data.categoryIds,
      tracks_attributes: data.trackAttributes,
      start_date: formatDate(data.startDate) || undefined,
      end_date: formatDate(data.endDate) || undefined,
      featured: convertBoolToNumber(data.featured),
      fullsize_cover_photo_url: data.fullSizeCoverPhotoUrl,
      show_progress: convertBoolToNumber(data.showProgress),
      search_keywords: data.searchKeywords
    },
    item_admins: {
      admin_ids: data.adminIds
    },
    sellable_items: sellableItems,
    free_cle_settings: {
      use_credits: convertBoolToNumber(data.freeCleEnabled),
      credits_amount: data.freeCleAmount
    },
    sellable_item: {
      disable_purchase: convertBoolToNumber(data.limitPurchaseAvailability),
      disable_purchase_after: data.purchaseAvailabilityDate
        ? formatDate(data.purchaseAvailabilityDate)
        : ''
    },
    expiration: {
      expirable: convertBoolToNumber(data.expirable),
      repurchasable: convertBoolToNumber(data.repurchasable),
      expires_at_strategy: data.expirationByDate ? '1' : '',
      expires_at: formatDate(data.expirationDate),
      days_before_expire_strategy: data.expirationByDays ? '1' : '',
      days_before_expire: data.expirationDays
    }
  }).then(() => {
    dispatch({ type: ADD_COURSE_SUCCESS });
    dispatch(fetchCourses());
  });
};

export const sortCourses = ids => async (dispatch, getState, api) => {
  dispatch({
    type: SORT_COURSES_IN_UI_REQUEST,
    payload: ids
  });
  await api.post('/courses/sort', {
    order: ids
  }).then(() => {
    dispatch({ type: SORT_COURSES_IN_UI_SUCCESS });
  });
};

export const editCourseDescription = text => async (dispatch, getState, api) => {
  await api.post('/account/courses_description', {
    courses_description: {
      text
    }
  }).then(() => dispatch(fetchCourses()));
};
