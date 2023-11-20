from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')


def serv(request):
    return render(request, 'main/serv.html')


def cont(request):
    return render(request, 'main/cont.html')
