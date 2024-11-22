from django.shortcuts import render

from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm
from GPS.settings import RECIPIENTS_EMAIL, DEFAULT_FROM_EMAIL
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


def index(request):
    return render(request, 'index.html')


def contacts(request):
    return render(request, 'contacts.html')


def service(request):
    return render(request, 'service.html')


def about(request):
    return render(request, 'about.html')


def news(request):
    return render(request, 'news.html')

def contact_view(request):
    # если метод GET, вернем форму
    if request.method == 'GET':
        form = ContactForm()
    elif request.method == 'POST':
        # если метод POST, проверим форму и отправим письмо
        form = ContactForm(request.POST)
        if form.is_valid():
            data = {
                'company': form.cleaned_data['company'],
                'trip': form.cleaned_data['trip'],
                'cargo': form.cleaned_data['cargo'],
                'sender': form.cleaned_data['sender'],
                'phone': form.cleaned_data['phone'],
                'message': form.cleaned_data['message']

            }

            try:
                html_body = render_to_string('sendemail.html', data)
                msg = EmailMultiAlternatives(subject='Сообещние с форма обратрной связи', to=RECIPIENTS_EMAIL)
                msg.attach_alternative(html_body, 'text/html')
                msg.send()

                #send_mail(f'{subject} от {from_email}', message, DEFAULT_FROM_EMAIL, RECIPIENTS_EMAIL)
            except BadHeaderError:
                return HttpResponse('Ошибка в теме письма.')
            return redirect('success')
    else:
        return HttpResponse('Неверный запрос.')
    return render(request, "index.html", 'contacts.html',  {'form': form})


def success_view(request):
    return HttpResponse('Приняли! Спасибо за вашу заявку.')
