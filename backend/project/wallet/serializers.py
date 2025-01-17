from rest_framework import serializers

from .models import Account


class AccountSeriliazer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Account
        fields = ["name", "balance", "currency", "created_at", "user"]
