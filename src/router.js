import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(''),
    routes: [
        {
            path: '/login', 
            component: () => import('./components/Login.vue'),
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
  }
    ]
})

export default router
