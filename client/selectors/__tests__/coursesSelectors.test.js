import {
  coursesBaseSelector, coursesDescriptionTextSelector, coursesSelector, coursesIdsSelector,
  coursesDataSelector, accountBannerSelector
} from '../coursesSelectors';

const state = {
  courses: {
    accountBanner: {
      bannerUrl: ''
    },
    coursesDescriptionText: '<ul></ul>',
    courses: {
      result: {
        course: ['14', '15']
      },
      entities: {
        course: {
          14: { id: '14' },
          15: { id: '15' }
        }
      }
    }
  }
};

describe('Courses selectors', () => {
  test('coursesBaseSelector should return courses root object', () => {
    const result = coursesBaseSelector(state);
    expect(result).toEqual(state.courses);
  });

  test('coursesDescriptionTextSelector should return courses description', () => {
    const result = coursesDescriptionTextSelector(state);
    expect(result).toBe('<ul></ul>');
  });

  test('coursesSelector should return courses object', () => {
    const result = coursesSelector(state);
    expect(result).toEqual(state.courses.courses);
  });

  test('coursesIdsSelector should return courses ids', () => {
    const result = coursesIdsSelector(state);
    expect(result).toEqual(['14', '15']);
  });

  test('coursesDataSelector should return courses data', () => {
    const result = coursesDataSelector(state);
    expect(result).toEqual({
      14: { id: '14' },
      15: { id: '15' }
    });
  });

  test('accountBannerSelector should return account banner object', () => {
    const result = accountBannerSelector(state);
    expect(result).toEqual({ bannerUrl: '' });
  });
});
