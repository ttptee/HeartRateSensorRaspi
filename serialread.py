#!/usr/bin/env python3
import serial

from firebase import firebase
firebase = firebase.FirebaseApplication('https://healthcare-715f5.firebaseio.com/', None)
resultHearthrate = firebase.get('/hearthrate', None)
print(resultHearthrate)

if __name__ == '__main__':
    
    ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=1)
    ser.flush()

    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').rstrip()   
            resultStatus = firebase.get('/status', None)
            print("Status is")
            print(resultStatus)
            if(resultStatus==0):
               firebase.delete('/hearthrate', None)
            
            
            if(resultStatus==1):
                firebase.post('/hearthrate',line)
                print(line)      
                
            