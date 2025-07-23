from django.shortcuts import render

def dashboard(request):
    """Displays the dashboard."""
    return render(request, "dashboard.html")


def base(request):
    """Displays the base template."""
    return render(request, "base.html")
