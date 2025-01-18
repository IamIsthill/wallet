from django.urls import path

from .views import AccountListCreate, AccountRetrieveUpdateDestroy

BASE_PATH = "wallet-account"

urlpatterns = [
    path(
        f"{BASE_PATH}/create/",
        AccountListCreate.as_view(),
        name="create-wallet-account",
    ),
    path(
        f"{BASE_PATH}/<int:pk>/",
        AccountRetrieveUpdateDestroy.as_view(),
        name="wallet-account",
    ),
]
