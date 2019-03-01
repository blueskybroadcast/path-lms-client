import { FETCH_COURSES } from './types';

import { convertBoolToNumber, formatDate } from '../helpers';

export const fetchCourses = params => async (dispatch, getState, api) => {
  const res = await api.get('/courses', { params });

  dispatch({
    type: FETCH_COURSES,
    payload: res.data
  });
};

export const addCourse = data => async (dispatch, getState, api) => {
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
      // start_date: ,
      // end_date: ,
      featured: convertBoolToNumber(data.featured),
      fullsize_cover_photo_url: data.fullSizeCoverPhotoUrl,
      show_progress: convertBoolToNumber(data.showProgress),
      search_keywords: data.searchKeywords
    },
    item_admins: {
      admin_ids: data.adminIds
    },
    sellable_items: sellableItems,
    // free_cle_settings: {
    //   use_credits: "1",
    //   credits_amount: "15"
    // }
    sellable_item: {
      disable_purchase: convertBoolToNumber(data.limitPurchaseAvailability),
      disable_purchase_after: data.purchaseAvailabilityDate
        ? formatDate(data.purchaseAvailabilityDate)
        : ''
    },
    expiration: {
      expirable: convertBoolToNumber(data.expirable),
      repurchasable: convertBoolToNumber(data.repurchasable),
      expires_at_strategy: convertBoolToNumber(data.expirationByDate),
      expires_at: formatDate(data.expirationDate),
      days_before_expire_strategy: convertBoolToNumber(data.expirationByDays),
      days_before_expire: data.expirationDays
    }
  });

  dispatch(fetchCourses());
};

export const editCourseDescription = text => async (dispatch, getState, api) => {
  await api.post('/account/courses_description', {
    courses_description: {
      text
    }
  });

  dispatch(fetchCourses());
};
