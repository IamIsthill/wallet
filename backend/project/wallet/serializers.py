from rest_framework import serializers

from .models import Account


class AccountSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"
        read_only_fields = ["user"]
