
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// ### ACTION CREATORS ###
//

// Async API call to receiveQuestions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
