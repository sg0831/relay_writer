from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import UserViewSet, GenreViewSet, PostViewSet, PageViewSet
from rest_framework.routers import DefaultRouter

# User 목록 보여주기
user_list = UserViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
# detail 보여주기 + 수정 + 삭제
user_detail = UserViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})


# Genre 목록 보여주기
genre_list = GenreViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
# detail 보여주기 + 수정 + 삭제
genre_detail = GenreViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})


# Post 목록 보여주기
post_list = PostViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
# detail 보여주기 + 수정 + 삭제
post_detail = PostViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})


# Page 목록 보여주기
page_list = PageViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
# detail 보여주기 + 수정 + 삭제
page_detail = PageViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})


router = DefaultRouter()
# 첫 번째 인자는 url의 prefix, 두 번째 인자는 ViewSet
router.register('user', UserViewSet)
router.register('genre', GenreViewSet)
router.register('post', PostViewSet)
router.register('page', PageViewSet)


urlpatterns =[
	path('', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)