from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings



class User(AbstractUser):
    recommend_list = models.ManyToManyField('Post', related_name='recommended_users', null=True, blank=True)
    like_list = models.ManyToManyField('Page', related_name='liked_users', null=True, blank=True)
    def __str__(self):
        return self.username


class Genre(models.Model):
    name = models.CharField(max_length=100)
    post_count = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name

class Post(models.Model):
    genre = models.ForeignKey(Genre, related_name='in_posts', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    views = models.PositiveIntegerField(default=0)
    recommends = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.title


class Page(models.Model):
    # 페이지들은 하나의 Post에 소속
    post = models.ForeignKey(Post, related_name='in_pages', on_delete=models.CASCADE)
    # 유저 정보가 삭제되더라도 모델의 정보는 남아있어야 함.
    writer = models.ForeignKey(User, related_name='wrote_pages', on_delete=models.SET_NULL, null=True, blank=False )
    # 최대 작성 가능한 텍스트 800바이트 = 한글 400자
    text = models.TextField(max_length=800, null=False, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    update_count = models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.post.title + ' ' + str(self.id)
