from django.shortcuts import render
from main.models import Film


def index(request):
    film_list = Film.objects.all()
    return render(request, 'index.html', context={
        'film_list':film_list
    })