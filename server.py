from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


current_id = 2
data = [
    {
        "id": 1,
        "name": "Chef's Knife",
        "image": "knife-11523888595f7ddbo8une.png",
        "facts": ["Curved blade allows for rocking back and forth on cutting board", "Width and long length of the knife enable it to do heavier duty chopping - like bundles of vegetables or potatoes", "Blade is 8 inches in length and 1.5 inches in width", "The most versatile knife"],
    },
    # {
    #     "id": 2,
    #     "name": "jim halpert"
    # },
]

# ROUTES

@app.route('/hi')
def hello():
   return 'Hi hi hi hi hi hi hi hi hi'

# Home
@app.route('/')
def hello_world():
   return render_template('home.html', data = data)   


@app.route('/learn/<id>')
def learn_item(id=None):
    return render_template('learn.html', data = data, id=id) 

# Create
@app.route('/learn')
def people(name=None):
    return render_template('learn.html', data=data)  


# AJAX FUNCTIONS

# ajax for people.js
@app.route('/add_name', methods=['GET', 'POST'])
def add_name():
    global data 
    global current_id 

    json_data = request.get_json()   
    name = json_data["name"] 
    
    # add new entry to array with 
    # a new id and the name the user sent in JSON
    current_id += 1
    new_id = current_id 
    new_name_entry = {
        "name": name,
        "id":  current_id
    }
    
    data.append(new_name_entry)

    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)

if __name__ == '__main__':
   app.run(debug = True)




