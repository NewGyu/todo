package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import play.api.libs.functional.syntax._
import views.html.defaultpages.badRequest

object TaskGroupCtrl extends Controller {
	def all = Action {
		Ok(Json.arr(
			Json.obj("id"->2,"title"->"俺のリスト")
			,Json.obj("id"->3,"title"->"あいつのリスト")
			,Json.obj("id"->5,"title"->"そいつのリスト")
		))
	}

	def find(id:Long) = Action {
		Ok(Json.obj("id"->2,"title"->"俺のリスト"))
	}
}