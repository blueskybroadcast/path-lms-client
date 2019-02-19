import { omit } from 'lodash';
import { FETCH_CATEGORIES, DELETE_CATEGORY } from '../actions/types';
import { getSortedCategories } from '../helpers/categories';

const initialState = {
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
    case FETCH_CATEGORIES:
      return {
        ...action.payload,
        sorted: getSortedCategories(
          action.payload.result.category,
          action.payload.entities.category
        )
      };

    case DELETE_CATEGORY:
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
