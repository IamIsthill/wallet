from django.urls import path

from project.user import views

urlpatterns = [
    path("user/register/", views.UserCreateView.as_view(), name="register"),
]
