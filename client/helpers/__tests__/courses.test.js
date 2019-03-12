import { convertGroupsToSellableItems, updateCoursesWithIcons } from '../courses';

import { groupsIds, groupsData } from '../../fixtures/groups';
import { coursesData, permittedContentCount } from '../../fixtures/courses';

describe('Courses helpers', () => {
  test('convertGroupsToSellableItems should return sellable items', () => {
    const result = convertGroupsToSellableItems(groupsIds, groupsData);
    expect(result).toEqual({
      0: {
        groupId: '4',
        groupName: 'Test Group 2',
        labelEnabled: false,
        pricesAttributes: {
          0: {
            currency: 'usd',
            label: '',
            price: ''
          }
        },
        sellable: true
      },
      1: {
        groupId: '3',
        groupName: 'Test Group 1',
        labelEnabled: false,
        pricesAttributes: {
          0: {
            currency: 'usd',
            label: '',
            price: ''
          }
        },
        sellable: true
      }
    });
  });

  test('updateCoursesWithIcons should return courses with icons', () => {
    const result = updateCoursesWithIcons(
      coursesData,
      Object.entries(permittedContentCount)
    );
    expect(result).toEqual({
      14: {
        active: true,
        comments: false,
        courseItemComments: false,
        coverDescription: 'Test Course 1 cover desctiption',
        coverPhotoUrl: 'https://cdn.filestackcontent.com/9HnjTksSpyenARCxXMxg',
        description: null,
        endDate: '2019-03-27',
        expiration: {
          id: '3',
          type: 'expiration'
        },
        featured: true,
        fullsizeCoverPhotoUrl: 'https://cdn.filestackcontent.com/wSqPHkBmRryI2YgTZLxF',
        id: '14',
        name: 'Test Course 1',
        permittedContent: {
          assessment: 1,
          assignment: 1,
          certificate: 1,
          document: 1,
          link: 1,
          presentation: 1,
          section: 1,
          survey: 1
        },
        position: 0,
        resizedCoverPhotoUrl: 'https://cdn.filestackcontent.com/9HnjTksSpyenARCxXMxg/convert?align=left&cache=true&fit=crop&format=jpeg&h=152&quality=100&w=320',
        searchKeywords: 'quiz, first',
        sellableItems: [{
          id: '10',
          type: 'sellableItem'
        }],
        showProgress: true,
        startDate: '2019-03-13',
        statuses: { purchase: 'unpaid' }
      },
      15: {
        active: true,
        comments: false,
        courseItemComments: false,
        coverDescription: 'Test Course 1 cover desctiption',
        coverPhotoUrl: 'https://cdn.filestackcontent.com/9HnjTksSpyenARCxXMxg',
        description: null,
        endDate: '2019-04-03',
        expiration: {
          id: '4',
          type: 'expiration'
        },
        featured: true,
        fullsizeCoverPhotoUrl: 'https://cdn.filestackcontent.com/wSqPHkBmRryI2YgTZLxF',
        id: '15',
        name: 'Test Course 2',
        position: 1,
        resizedCoverPhotoUrl: 'https://cdn.filestackcontent.com/9HnjTksSpyenARCxXMxg/convert?align=left&cache=true&fit=crop&format=jpeg&h=152&quality=100&w=320',
        searchKeywords: 'quiz, first',
        sellableItems: [{
          id: '11',
          type: 'sellableItem'
        }],
        showProgress: true,
        startDate: '2019-03-24',
        statuses: { purchase: 'unpaid' }
      }
    });
  });
});
