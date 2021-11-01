from django.http import HttpResponse
from .serializers import UserSerializer, GenreSerializer, PostSerializer, PageSerializer
from rest_framework import viewsets
from django.contrib import auth
from .models import User, Genre, Post, Page
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import action
from rest_framework.response import Response



# 목록, detail 보여주기, 수정하기, 삭제하기 모두 가능
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    @action(detail=True)
    def postList(self, request, pk):
        instance = self.get_object()
        serializer = self.get_serializer(instance.in_posts.all(), many=True)
        return Response(serializer.data)



class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    @action(detail=True)
    def recommendList(self, request, pk):
        instance = self.get_object()
        serializer = self.get_serializer(instance.recommended_users.all(), many=True)
        return Response(serializer.data)



class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    @action(detail=True)
    def likeList(self, request, pk):
        instance = self.get_object()
        serializer = self.get_serializer(instance.liked_users.all(), many=True)
        return Response(serializer.data)