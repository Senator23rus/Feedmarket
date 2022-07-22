
from rest_framework import permissions
from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)

class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user

class IsOwnerProfileOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user==request.user