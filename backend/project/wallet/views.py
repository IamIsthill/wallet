from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Account
from .serializers import AccountSeriliazer


# Create your views here.
class AccountListCreate(generics.ListCreateAPIView):
    serializer_class = AccountSeriliazer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        accounts = Account.objects.filter(user=user)
        return accounts

    def perform_create(self, serializer):
        user = self.request.user
        if serializer.is_valid():
            serializer.save(user=user)
        else:
            print(serializer.errors)


class AccountRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AccountSeriliazer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        account = Account.objects.filter(id=self.kwargs["pk"], user=user)
        return account

    def perform_update(self, serializer):
        user = self.request.user
        if serializer.is_valid():
            serializer.save(user=user)
        else:
            print(serializer.errors)

    def perform_destroy(self, instance):
        user = self.request.user
        if user == instance.user:
            instance.delete()
