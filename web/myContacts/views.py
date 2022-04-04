from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contacts(request):
    return render(request, 'contacts.html')

def add_contact(request):
    return render(request, 'add-contact.html')

def udpate_contact(request):
    return render(request, 'update-contact.html')
