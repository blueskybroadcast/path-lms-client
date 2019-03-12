import { omit } from 'lodash';
import { FETCH_CATEGORIES_SUCCESS, DELETE_CATEGORY_SUCCESS } from '../actions/types';
import { getSortedCategories } from '../helpers/categories';

export const initialState = {
  result: {
    category: []
  },
  entities: {
    category: {}
  },
  sorted: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...action.payload,
        sorted: action.payload.result.category ? getSortedCategories(
          action.payload.result.category,
          action.payload.entities.category
        ) : []
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        result: {
          category: state.result.category.filter(cat => cat !== action.payload)
        },
        entities: {
          category: omit(state.entities.category, action.payload)
        },
        sorted: state.sorted.filter(cat => cat.id !== action.payload)
      };

    default:
      return state;
  }
};

export default categoriesReducer;
