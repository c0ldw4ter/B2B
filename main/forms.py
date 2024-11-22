from django import forms



class ContactForm(forms.Form):
    company = forms.CharField(label='', help_text='Компания',max_length=100, min_length=2, required=True)
    trip = forms.CharField(label='', help_text='Маршруты', max_length=100, min_length=2, required=True)
    cargo = forms.CharField(label='', help_text='Груз', max_length=100, min_length=2, required=True)
    sender = forms.EmailField(label='', help_text='Email', max_length=150, min_length=4, required=True )
    phone = forms.CharField(label='', help_text='Телефон', max_length=70, min_length=11, required=True)
    message = forms.CharField(label='', help_text='Сообщение', widget=forms.Textarea, max_length=2000, required=True)