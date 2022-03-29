from django.shortcuts import get_object_or_404, get_list_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import CommercialArea, SeoulGuDong
from .serializers import CommercialAreaSerializer, SeoulGuDongSerializer
from commercial_area import serializers



# gu_list = ['마포구','서대문구','은평구','종로구','중구','용산구','성동구','광진구',
#            '동대문구','성북구','강북구','도봉구','노원구','중랑구','강동구','송파구',
#            '강남구','서초구','관악구','동작구','영등포구','금천구','구로구','양천구','강서구']

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def commercial_area_gu(request, guName):
    data = {
        'guInfo' : [],
        'dongInfo': [],
        }
    seoulGuDong = SeoulGuDong.objects.filter(guName=guName)
    str1 = seoulGuDong[0].guXYPoint.replace('[', '').replace(']', '')
    lst1 = str1.split(', ')
    res1 = []
    temp = []
    for j in range(len(lst1)):
        temp.append(float(lst1[j]))
        if j%2 == 1:
            res1.append(temp)
            temp = []
    data['guInfo'].append(
        {
            'guName': seoulGuDong[0].guName,
            'guCenterXPoint': seoulGuDong[0].guCenterXPoint,
            'guCenterYPoint': seoulGuDong[0].guCenterYPoint,
            'guXYPoint': res1,
        }
    )
    for i in range(len(seoulGuDong)):
        str2 = seoulGuDong[i].dongXYPoint.replace('[', '').replace(']', '')
        lst2 = str2.split(', ')
        res2 = []
        temp = []
        for j in range(len(lst2)):
            temp.append(float(lst2[j]))
            if j%2 == 1:
                res2.append(temp)
                temp = []
        data['dongInfo'].append(
            {
                'dongCode': seoulGuDong[i].dongCode,
                'dongName': seoulGuDong[i].dongName,
                'dongCenterXPoint': seoulGuDong[i].dongCenterXPoint,
                'dongCenterYPoint': seoulGuDong[i].dongCenterYPoint,
                'dongXYPoint': res2
            }
        )
    return JsonResponse(data)

@api_view(['GET'])
@permission_classes([AllowAny])
def commercial_area_dong(request, guName, dongName):
    data = {
        'commercialAreaInfo' : [],
    }
    commercialArea = CommercialArea.objects.filter(seoulGuDong__dongName=dongName)
    for i in range(len(commercialArea)):
        str1 = commercialArea[i].commercialAreaXYPoint.replace('[', '').replace(']', '')
        lst1 = str1.split(', ')
        res1 = []
        temp = []
        for j in range(len(lst1)):
            temp.append(float(lst1[j]))
            if j%2 == 1:
                res1.append(temp)
                temp = []
        data['commercialAreaInfo'].append(
            {
                'commercialAreaCode' : commercialArea[i].commercialAreaCode,
                'commercialAreaName' : commercialArea[i].commercialAreaName,
                'commercialAreaXYPoint' : res1,
            }
        )
    return JsonResponse(data)