from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Account
from .serializers import AccountSeriliazer


# Create your views here.
class AccountCreateView(generics.CreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSeriliazer
    permission_classes = [IsAuthenticated]
