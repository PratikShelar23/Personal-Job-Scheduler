from django.shortcuts import render, redirect, get_object_or_404
from .forms import Company
from .models import Myreg,resume
from django.http import HttpResponse

def index(request):
    return render(request, 'main.html')

def dash(request):
    scheduled_company_name = request.GET.get('company', '')
    print("Received Company Name:", scheduled_company_name)
    return render(request, 'dash.html', {'scheduled_company_name': scheduled_company_name})
    

def reg(request):
    queryset = Myreg.objects.all()
    if request.method == 'POST':
            # Myreg.objects.create(
            #     companyName=request.POST['companyName'],
            #     driveDate=request.POST['driveDate'],
            #     link=request.POST['link'],
            # )
        form = Company(request.POST)
        if form.is_valid():
            form.save()
            queryset = Myreg.objects.all()
            return redirect('register')  # Redirect to a success page
    else:
        form = Company()

    return render(request, 'regis.html', {'form': form, 'queryset': queryset})

def delete_drive(request, pk):
    drive = get_object_or_404(Myreg, pk=pk)
    drive.delete()
    return redirect('register') 

def sche(request):
    companies = Myreg.objects.all()
    return render(request, 'sched.html', {'companies':companies})
    
def scheduleCompany(request):

    scheduled_company_name = request.POST.get('companyName', '')
    request.session['scheduled_company_name'] = scheduled_company_name

    
    return HttpResponse('Scheduling Successful')

# def profile(request):
#     return render(request, 'profile.html')

def profile(request):
    resumes = resume.objects.all()
    

    return render(request, 'profile.html', {'resumes': resumes})
   