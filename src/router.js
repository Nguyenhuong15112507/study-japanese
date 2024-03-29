import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(''),
    routes: [
        {
            path: '/login', 
            component: () => import('./components/Login.vue'),
        },
        {
          path: '/signin', 
          component: () => import('./components/Signin.vue'),
      },
        {
            path: '/',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'teacher',
                  component: () => import('./components/Teacher.vue')
                }
              ],
        },
        {
            path: '/student',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'student',
                  component: () => import('./components/Student.vue')
                }
              ],
        },
        
        {
            path: '/studentDaily',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'studentDaily',
                  component: () => import('./components/StudentDaily.vue')
                }
              ],
        },

        {
          path: '/calendar',
          component: () => import('./AppLayout.vue'),
          children: [
              {
                path: '',
                name: 'calendar',
                component: () => import('./components/Calendar.vue')
              }
            ],
      },
        {
            path: '/chatMessage',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'chatMessage',
                  component: () => import('./components/ChatMessage.vue')
                }
              ],
        },
        {
            path: '/practice',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'practice',
                  component: () => import('./components/Practice.vue')
                },
                {
                  path: '/practice/flashcardDetail',
                  name: 'flashcardDetail',
                  component: () => import('./components/FlashCardDetail.vue')
                },
                {
                  path: '/practice/flashcard',
                  name: 'flashcard',
                  component: () => import('./components/FlashCard.vue')
                },
                {
                  path: '/practice/flashcardlist',
                  name: 'flashcardList',
                  component: () => import('./components/FlashcardList.vue')
                },
                {
                  path: '/practice/flashcardQuesDetail',
                  name: 'flashcardQuesDetail',
                  component: () => import('./components/FlashcardQuesDetail.vue')
                }
              ],
        },
        ,
        {
            path: '/createQuestion',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'createQuestion',
                  component: () => import('./components/CreateQuestion.vue')
                }
              ],
        },
        
        {
            path: '/grammar',
            component: () => import('./AppLayout.vue'),
            children: [
                {
                  path: '',
                  name: 'grammar',
                  component: () => import('./components/Grammar.vue')
                }
              ],
        },
        {
          path: '/kanji',
          component: () => import('./AppLayout.vue'),
          children: [
              {
                path: '',
                name: 'kanji',
                component: () => import('./components/Kanji.vue')
              },
                {
                  path: '/kanji/kanjiFlashcard',
                  name: 'kanjiFlashcard',
                  component: () => import('./components/popup/detailDisplay/KanjiFlashcard.vue')
                }
            ],
      },
      {
        path: '/learn-listen',
        component: () => import('./AppLayout.vue'),
        children: [
            {
              path: '',
              name: 'learn-listen',
              component: () => import('./components/LearnListen.vue')
            }
          ],
    },
    {
      path: '/learn-conversation',
      component: () => import('./AppLayout.vue'),
      children: [
          {
            path: '',
            name: 'learn-conversation',
            component: () => import('./components/LearnConversation.vue')
          }
        ],
  },
  {
    path: '/create-flashcard',
    component: () => import('./AppLayout.vue'),
    children: [
        {
          path: '',
          name: 'create-flashcard',
          component: () => import('./components/FlashcardCreate.vue')
        }
      ],
},
{
  path: '/user-profile',
  component: () => import('./AppLayout.vue'),
  children: [
      {
        path: '',
        name: 'user-profile',
        component: () => import('./components/UserProFile.vue')
      }
    ],
}
    ]
})

export default router
