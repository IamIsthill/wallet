from django.urls import path

from .views import AccountListCreate

urlpatterns = [
    path(
        "wallet-account/create/",
        AccountListCreate.as_view(),
        name="create-wallet-account",
    ),
]
