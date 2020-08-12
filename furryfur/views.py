from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User, PetSitter, Address
import pgeocode

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
def userLogin(request):
    
    email = request.POST.get('email')
    password = request.POST.get('password')
    if 'email' in request.session.keys():
        return HttpResponseRedirect(reverse("index"))
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
        print("Invalid email or password.")
        return HttpResponse(json.dumps({"error": True, "message": "Invalid email or password."}))
        # return HttpResponseRedirect(reverse("furryfur:index"))

#  Firstname Lastname Email Password Validation done at JavaScript.
@csrf_exempt
def userSignup(request):
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


def findSitterView(request):
    return render(request, "furryfur/FindSitter.html")

@csrf_exempt
def findSitter(request):
    pincode = request.POST.get('pincode')

    dist = pgeocode.GeoDistance("gb")
    users = {}
    # dist.query_postal_code()
    # print(pincode)
    distance = True
    if pincode == None:
        distance = False

    for user in User.objects.filter(owner="0"):
        address = Address.objects.get(userid=user.userid)
        petsitter = PetSitter.objects.get(petSitterId=user.userid)
        users[user.userid] = dict()
        users[user.userid]["firstname"] = user.firstname
        users[user.userid]["lastname"] = user.lastname
        users[user.userid]["email"] = user.email
        if distance:
            users[user.userid]["distance"] = dist.query_postal_code(pincode, address.pincode)
        else:
            users[user.userid]["distance"] = None

        users[user.userid]["street"] = address.street
        users[user.userid]["landmark"] = address.landmark
        users[user.userid]["pincode"] = address.pincode
        users[user.userid]["country"] = address.country
        users[user.userid]["city"] = address.city

        users[user.userid]["dog"] = petsitter.dog
        users[user.userid]["cat"] = petsitter.cat

        users[user.userid]["boarding"] = petsitter.boarding
        users[user.userid]["house_sitting"] = petsitter.house_sitting
        users[user.userid]["doggy_day_care"] = petsitter.doggy_day_care
        users[user.userid]["dog_walking"] = petsitter.dog_walking

        users[user.userid]["boarding_price"] = petsitter.boarding_price
        users[user.userid]["house_sitting_price"] = petsitter.house_sitting_price
        users[user.userid]["doggy_day_care_price"] = petsitter.doggy_day_care_price
        users[user.userid]["dog_walking_price"] = petsitter.dog_walking_price

        users[user.userid]["contact_info"] = petsitter.contact_info

        users[user.userid]["dog_size1"] = petsitter.dog_size1
        users[user.userid]["dog_size2"] = petsitter.dog_size2
        users[user.userid]["dog_size3"] = petsitter.dog_size3
        users[user.userid]["dog_size4"] = petsitter.dog_size4

        users[user.userid]["description"] = petsitter.description
    
    return HttpResponse(json.dumps(users))

def quicksort_petsitters(petsitters):
    pass
