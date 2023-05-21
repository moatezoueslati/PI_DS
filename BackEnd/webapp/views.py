from django.shortcuts import render
from django.shortcuts import redirect, get_object_or_404, reverse
from django.views.generic.edit import UpdateView
from .models import *
from .forms import CRUDFORM
from webapp.serializers import *
from rest_framework.response import Response
from rest_framework import status, generics
import math
from datetime import datetime
from django.http import JsonResponse
from .models import Image

from django.views.generic import ListView, CreateView, DeleteView, DetailView
# Create your views here.
def BASE(request):
    return render(request,'base.html')
# home view
class Home(ListView):
    model = bouteille
    template_name = 'templates/bouteilleForms/list.html'


class Create(CreateView):
    model = bouteille
    template_name = r'C:\Users\pc\OneDrive\Bureau\workspace\PI\templates\bouteilleForms\create.html'
    form_class = CRUDFORM

    # if the form, submits, to go back to the homepage automatically
    def get_success_url(self):
        return reverse('home')

# detail view
class Detail(DetailView):
    model = bouteille
    template_name = 'templates/bouteilleForms/detail.html'

# update view
class Update(UpdateView):
    model = bouteille
    template_name = 'templates/bouteilleForms/create.html'
    form_class = CRUDFORM

    # if the form, submits, to go back to the homepage automatically
    def get_success_url(self):
        return reverse('home')

# delete view
class Delete(DeleteView):
    model = bouteille
    template_name = 'templates/bouteilleForms/delete.html'
    # if the form, submits, to go back to the homepage automatically
    def get_success_url(self):
        return reverse('home')
    
    
class BouteilleV(generics.GenericAPIView):
    serializer_class = BouteilleSerializer
    queryset = bouteille.objects.all()

    def get(self, request):
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 20))
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num
        search_param = request.GET.get("search")
        Bouteilles = bouteille.objects.all()
        total_Bouteilles = Bouteilles.count()
        if search_param:
            Bouteilles = Bouteilles.filter(title__icontains=search_param)
        serializer = self.serializer_class(Bouteilles[start_num:end_num], many=True)
        return Response({
            "status": "success",
            "total": total_Bouteilles,
            "page": page_num,
            "last_page": math.ceil(total_Bouteilles / limit_num),
            "Bouteilles": serializer.data
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "Bouteille": serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class BouteilleDetail(generics.GenericAPIView):
    queryset = bouteille.objects.all()
    serializer_class = BouteilleSerializer

    def get_Bouteille(self, pk):
        try:
            return bouteille.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        Bouteille = self.get_Bouteille(pk=pk)
        if Bouteille == None:
            return Response({"status": "fail", "message": f"Bouteille with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(Bouteille)
        return Response({"status": "success", "Bouteille": serializer.data})

    def patch(self, request, pk):
        Bouteille = self.get_Bouteille(pk)
        if Bouteille == None:
            return Response({"status": "fail", "message": f"Bouteille with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(
            Bouteille, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "Bouteille": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        Bouteille = self.get_Bouteille(pk)
        if Bouteille == None:
            return Response({"status": "fail", "message": f"Bouteille with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        Bouteille.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class RVMV(generics.GenericAPIView):
    serializer_class = RVMSerializer
    queryset = rvm.objects.all()

    def get(self, request):
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 10))
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num
        search_param = request.GET.get("search")
        RVMS = rvm.objects.all()
        total_RVM = RVMS.count()
        if search_param:
            RVMS = RVMS.filter(title__icontains=search_param)
        serializer = self.serializer_class(RVMS[start_num:end_num], many=True)
        return Response({
            "status": "success",
            "total": total_RVM,
            "page": page_num,
            "last_page": math.ceil(total_RVM / limit_num),
            "rvm": serializer.data
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "RVM": serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class RVMDetail(generics.GenericAPIView):
    queryset = rvm.objects.all()
    serializer_class = RVMSerializer

    def get_RVM(self, pk):
        try:
            return rvm.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        RVM = self.get_RVM(pk=pk)
        if RVM == None:
            return Response({"status": "fail", "message": f"RVM with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(RVM)
        return Response({ "RVM": serializer.data})

    def patch(self, request, pk):
        RVM = self.get_RVM(pk)
        if RVM == None:
            return Response({"status": "fail", "message": f"RVM with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(
            RVM, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "RVM": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        RVM = self.get_RVM(pk)
        if RVM == None:
            return Response({"status": "fail", "message": f"RVM with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        RVM.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class recompenseV(generics.GenericAPIView):
    serializer_class = RecompenseSerializer
    queryset = recompense.objects.all()

    def get(self, request):
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 10))
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num
        search_param = request.GET.get("search")
        recompenseS = recompense.objects.all()
        total_recompense = recompenseS.count()
        if search_param:
            recompenseS = recompenseS.filter(title__icontains=search_param)
        serializer = self.serializer_class(recompenseS[start_num:end_num], many=True)
        return Response({
            "status": "success",
            "total": total_recompense,
            "page": page_num,
            "last_page": math.ceil(total_recompense / limit_num),
            "recompense": serializer.data
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "recompense": serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class recompenseDetail(generics.GenericAPIView):
    queryset = recompense.objects.all()
    serializer_class = RecompenseSerializer

    def get_recompense(self, pk):
        try:
            return recompense.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        recompense = self.get_recompense(pk=pk)
        if recompense == None:
            return Response({"status": "fail", "message": f"recompense with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(recompense)
        return Response({"status": "success", "recompense": serializer.data})

    def patch(self, request, pk):
        recompense = self.get_recompense(pk)
        if recompense == None:
            return Response({"status": "fail", "message": f"recompense with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(
            recompense, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "recompense": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        recompense = self.get_recompense(pk)
        if recompense == None:
            return Response({"status": "fail", "message": f"recompense with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        recompense.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# user
def upload_image(request):
    if request.method == 'POST':
        image = request.FILES['image']
        Image.objects.create(file=image)
        return JsonResponse({'message': 'Image uploaded successfully'})
    return JsonResponse({'error': 'Invalid request method'})
class userV(generics.GenericAPIView):
    serializer_class = UserSerializer
    queryset = user.objects.all()

    def get(self, request):
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 10))
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num
        search_param = request.GET.get("search")
        userS = user.objects.all()
        total_user = userS.count()
        if search_param:
            userS = userS.filter(title__icontains=search_param)
        serializer = self.serializer_class(userS[start_num:end_num], many=True)
        return Response({
            "status": "success",
            "total": total_user,
            "page": page_num,
            "last_page": math.ceil(total_user / limit_num),
            "user": serializer.data
        })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "user": serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
class userDetail(generics.GenericAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer

    def get_user_by_id(self, pk):
        try:
            return user.objects.get(pk=pk)
        except:
            return None
    def get_user_by_username(self, username):
        return get_object_or_404(user, username=username)
    
    def get(self, request, pk_or_username):
        if pk_or_username.isdigit():
            user = self.get_user_by_id(pk_or_username)
        else:
            user = self.get_user_by_username(pk_or_username)

        serializer = self.serializer_class(user)
        return Response({"status": "success", "user": serializer.data})

    

    def patch(self, request, pk):
        user = self.get_user(pk)
        if user == None:
            return Response({"status": "fail", "message": f"user with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(
            user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data['updatedAt'] = datetime.now()
            serializer.save()
            return Response({"status": "success", "user": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        user = self.get_user(pk)
        if user == None:
            return Response({"status": "fail", "message": f"user with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
import dlib
import dlib
import cv2
import numpy as np


# the function 
def compare(path1,path2):
  face_detector = dlib.get_frontal_face_detector()
  face_recognizer = dlib.face_recognition_model_v1(r'C:\Users\pc\OneDrive\Bureau\workspace\PI\webapp\face\dlib_face_recognition_resnet_model_v1.dat')
  shape_predictor = dlib.shape_predictor(r'C:\Users\pc\OneDrive\Bureau\workspace\PI\webapp\face\shape_predictor_68_face_landmarks.dat')
  target_image_1=cv2.imread(path1)
  target_image_1 = target_image_1.astype(np.uint8) 


  target_faces_1 = face_detector(target_image_1)
  target_descriptors_1 = []
  for face in target_faces_1:
    landmarks = shape_predictor(target_image_1, face)
    descriptor = face_recognizer.compute_face_descriptor(target_image_1, landmarks)
    target_descriptors_1.append(descriptor)
  target_image_2 = cv2.imread(path2)
  target_image_2 = target_image_2.astype(np.uint8) 

  target_faces_2 = face_detector(target_image_2)

  target_descriptors_2 = []
  for face in target_faces_2:
    landmarks = shape_predictor(target_image_2, face)
    descriptor = face_recognizer.compute_face_descriptor(target_image_2, landmarks)
    target_descriptors_2.append(descriptor)

  # Compare the face descriptors
  distances = []
  for descriptor_1 in target_descriptors_1:
    for descriptor_2 in target_descriptors_2:
        distance = np.linalg.norm(np.array(descriptor_1) - np.array(descriptor_2))
        distances.append(distance)

  min_distance = np.min(distances)
  threshold = 0.6  # Adjust the threshold value as per your needs

  if min_distance <= threshold:
    return "Yes, it is the same person."
  else:
    return "No, it is not the same person."
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def compare_faces(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            path1 = data.get('path1')
            path2 = data.get('path2')

            if path1 is None or path2 is None:
                # Return an error message if path1 or path2 is missing in the request body
                error_msg = {'error': 'Missing path1 or path2 in the request body'}
                return JsonResponse(error_msg, status=400)

            # Call the compare function and get the result
            result = compare(path1, path2)

            # Prepare the JSON response
            response_data = {'result': result}
            return JsonResponse(response_data)

        except json.JSONDecodeError:

            # Return an error message if the request body is not valid JSON
            error_msg = {'error': 'Invalid JSON in the request body'}
            return JsonResponse(error_msg, status=400)
        finally:
            # Delete the image file after using path2
            delete_image_file(path2)

    else:
        # Return an error message for unsupported request methods
        error_msg = {'error': 'Invalid request method'}
        delete_image_file(path2)

        return JsonResponse(error_msg, status=405)
import os

def delete_image_file(file_path):
    try:
        os.remove(file_path)
        print(f"File '{file_path}' deleted successfully.")
    except OSError as e:
        print(f"Error deleting file '{file_path}': {e}")








