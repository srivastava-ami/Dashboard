# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, 'hsdash/index.html')


def login(request):
    return render(request, 'hsdash/login.html')


def register(request):
    return render(request, 'hsdash/register.html')


def forgot_password(request):
    return render(request, 'hsdash/forgot-password.html')
