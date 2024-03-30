import { defineStore } from 'pinia'
export const studentJapaneseStore = defineStore('studyJapanese', {
    state: () => (
      { user: null,
      announce:[],
      lesson: [],
      grammar:{grammarId: null},
      kanji: []}
      
      ),
  persist: true,
  getters: {
    
  },
  actions: {
    login(user) {
      this.user = user
    },
    logout(){
      this.user = null;
    },
    appendContent(announce) {
      this.announce.push(announce)
    },
    appendLesson(lesson) {
      this.lesson.push(lesson)
    },
    appendGrammarId(grammarId) {
      this.grammar.id = grammarId
    },
    appendKanji(kanji) {
      this.kanji.push(kanji)
    }
  }
  })
