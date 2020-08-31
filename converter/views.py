from django.shortcuts import render
from django import forms
# Create your views here.

class converted(forms.Form):
	pounds = forms.FloatField()

class converted_2(forms.Form):
	dollars = forms.FloatField()


lb_form = converted()
cash_form = converted_2()

def one(request):
	return render(request, 'converter/app.html', {"form": lb_form, "form_2": cash_form})

def two(request):
	if request.method == 'POST':
		form = converted(request.POST)
		if form.is_valid():
			pounds = form.cleaned_data['pounds']
			kilos = pounds * 2.205
			return render(request, 'converter/app.html', {"form": lb_form, "form_2": cash_form, "kilos": kilos})
def three(request):
	if request.method == 'POST':
		form = converted_2(request.POST)
		if form.is_valid():
			dollars = form.cleaned_data['dollars']
			euros = dollars * 0.85
			return render(request, 'converter/app.html', {"form": lb_form, "form_2": cash_form, "euros": euros})
