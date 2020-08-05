from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

# Create your views here.
@csrf_exempt
def index(request):

    context = dict()
    
    if "error" in request.session.keys() and request.session['error'] and request.session['message'] == "login_unsuccessful":
        context['error'] = True
        context['message'] = "login_unsuccessful"
    elif "error" in request.session.keys() and not request.session['error']:
        context['error'] = False
        context['message'] = "login_successful"
        context['username'] = "username"
        context['email'] = request.session['email']
    else:
        context['error'] = False
        context['message'] = "display_home"
    print(context)
    return render(request, 'furryfur/index.html', context)
    
@csrf_exempt
def user_login(request):
    
    email = request.POST.get('email')
    password = request.POST.get('password')
    if 'email' in request.session.keys():
        return HttpResponseRedirect(reverse("furryfur:index"))
    try:
        user = User(email=email, password=password)
        request.session['error'] = False
        request.session['message'] = "login_successful"
        request.session['email'] = email
        request.session['firstname'] = user.firstname
        request.session['lastname'] = user.lastname
        # return HttpResponse( json.dumps({"error": False, "message": user.firstname + " " + user.lastname + " " + "Login Successfull"}))
        return HttpResponseRedirect(reverse("index"))
    except:
        return HttpResponse(json.dumps({"error": True, "message": "Invalid email or password."}))
        # return HttpResponseRedirect(reverse("furryfur:index"))

#  Firstname Lastname Email Password Validation done at JavaScript.
@csrf_exempt
def user_signup(request):
    firstname = request.POST.get('firstname')
    lastname = request.POST.get('lastname')
    email = request.POST.get('email')
    password = request.POST.get('password')

    try:
        user = User(firstname = firstname, lastname = lastname)
        return HttpResponse(json.dumps({"error": True, "message": "User already exists"}))
    except:
        user = User(firstname = firstname, lastname = lastname, email=email, password=password)
        user.save()
        return HttpResponse(json.dumps({"error": False, "message": "User Registered Successfully"}))

@csrf_exempt
def logout(request):    
    request.session.flush()
    return HttpResponseRedirect(reverse('index'))
    
    

def signInSignUp(request):
    if "email" in request.session.keys():
        return HttpResponseRedirect(reverse("index"))
        # return render(request, "furryfur/index.html", context)
    return render(request, "furryfur/Login_Signup.html")
