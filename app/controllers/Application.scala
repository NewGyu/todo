package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import views.html.defaultpages.badRequest

object Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def sayHello(name:String, age:Long) = Action{request =>
    Ok(Json.obj("type" ->"AAA", "name"->name, "age"->age))
  }
}