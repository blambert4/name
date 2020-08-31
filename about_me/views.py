from django.shortcuts import render
from django.http import Http404
from django import forms
# Create your views here.

class converted(forms.Form):
	pounds = forms.FloatField()

class converted_2(forms.Form):
	dollars = forms.FloatField()

class converted_3(forms.Form):
	feet = forms.FloatField()

lb_form = converted()
cash_form = converted_2()
length_form = converted_3()

def converter(request):
	return render(request, 'about_me/app.html', {"form": lb_form, "form_2": cash_form, "form_3": length_form})

def kilo(request):
	if request.method == 'POST':
		form = converted(request.POST)
		if form.is_valid():
			pounds = form.cleaned_data['pounds']
			kilos = pounds * 2.205
			return render(request, 'about_me/app2.html', {"form": lb_form, "kilos": kilos})
def euro(request):
	if request.method == 'POST':
		form = converted_2(request.POST)
		if form.is_valid():
			dollars = form.cleaned_data['dollars']
			euros = dollars * 0.85
			return render(request, 'about_me/app3.html', {"form_2": cash_form, "euros": euros})
			

def meter(request):
	if request.method == 'POST':
		form = converted_3(request.POST)
		if form.is_valid():
			feet = form.cleaned_data['feet']
			meters = feet * 0.3048
			return render(request, 'about_me/app4.html', {"form_3": length_form, "meters": meters})


def home(request):
	return render(request, "about_me/home_page.html")

def map(request):
	if request.method == 'POST':
		return render(request, "about_me/api.html")
	else:
		raise Http404('get requests not allowed')

def game(request):
	if request.method == 'POST':
		return render(request, "about_me/fun_game1.html")
	else:
		raise Http404('get requests not allowed')

		
def landing(request):
	if request.method == 'POST':
		return render(request, 'about_me/landing.html')
	else:
		raise Http404('get requests not allowed')