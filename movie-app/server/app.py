from flask import Flask

app = Flask()
app.route("/movies", methods=["GET"])
def get_movies():
    return []

app.run("0.0.0.0", port=9000)