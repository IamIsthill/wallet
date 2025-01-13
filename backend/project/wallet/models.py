from django.db import models
from django.contrib.auth.models import User
from enum import Enum

# Create your models here.

class Currency(models.TextChoices):
    PHP = "PHP", "PHP"
    USD = "USD", "USD"

class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="account")
    name = models.CharField(max_length=20, default="Wallet")
    balance = models.BigIntegerField(default=0)
    currency = models.CharField(max_length=10,choices=Currency.choices, default= Currency.PHP)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user} - {self.name}"


