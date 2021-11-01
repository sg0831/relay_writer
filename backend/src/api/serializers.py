from rest_framework import serializers
from .models import User, Genre, Post, Page



class UserSerializer( serializers.ModelSerializer ):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'recommend_list', 'like_list']




class GenreSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Genre
        fields = '__all__'



class PostSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Post
        fields = '__all__'



# class RecommendSerializer( serializers.ModelSerializer ):
    # class Meta:
    #     model = Recommend
    #     fields = '__all__'



class PageSerializer( serializers.ModelSerializer ):
    class Meta:
        model = Page
        fields = '__all__'



# class LikeSerializer( serializers.ModelSerializer ):
#     class Meta:
#         model = Like
#         fields = '__all__'