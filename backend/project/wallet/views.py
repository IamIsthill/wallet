from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

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
