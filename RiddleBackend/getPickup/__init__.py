import logging
import azure.functions as func
import openai
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    input_string = ''
    riddle_question = ''
    riddle_answer = ''
    
    try:
        if req.route_params.get('phrase'):
            input_string = req.route_params.get('phrase')
        else:
            input_string = 'love'
    except:
            input_string = 'love'
    
    logging.info('Input is: ' + input_string)
    
    openai.api_key = ''
    
    def generate_riddle(input_string):
        prompt = f"Write a riddle including the phrase: '{input_string}' along with its answer and reason. The Riddle should start with 'Riddle:' and its answer + solution should start with 'Answer:'"
        try:
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=prompt,
                max_tokens=100,
                stop=None,
                temperature=0.7
            )
            return response['choices'][0]['text'].strip()
        except:
            logging.error('There is a Rate Limit Exception')
            return func.HttpResponse(json.dumps({"Riddle": "Try Again Later!"}), status_code=500)

    riddle = generate_riddle(input_string)
    riddle_question_index = riddle.find("Riddle:")
    riddle_answer_index = riddle.find("Answer:")
    riddle_question = riddle[8:riddle_answer_index]
    riddle_answer = riddle[riddle_answer_index + 8 :]
    logging.info('Riddle is: ' + riddle)
    return func.HttpResponse(json.dumps({"Riddle": riddle_question, "Answer": riddle_answer}), status_code=200)