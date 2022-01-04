from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *



class UserSerializer( serializers.ModelSerializer ):
    class Meta:
        model = User
        fields = [ 'username', 'password' ]


class SignInSerializer( serializers.ModelSerializer ):
    class Meta:
        model = User
        fields = [ 'username', 'password' ]



class GenreSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Genre
        fields = '__all__'


class PostSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Post
        fields = '__all__'


class RecommendSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Recommend
        fields = '__all__'


class PageSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Page
        fields = '__all__'


class LikeSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Like
        fields = '__all__'