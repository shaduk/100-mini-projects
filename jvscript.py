import openpyxl

wb = openpyxl.load_workbook('ids.xlsx')               #Open the excel file to be operated on
sheet = wb.get_sheet_by_name('Sheet2')   

tranids = []
i = 2
while(True):
    cellvalue = sheet['A'+str(i)].value
    if cellvalue == None:
        break
    tranids.append(cellvalue)
    i = i + 1




num_lines = sum(1 for line in open('test.txt'))
infile=open("netlink.txt","r")
outfile=open("out.txt","w")
print num_lines

flag1 = 0
flag2 = 0
data = []
for line in infile:
    if(flag1 == 0):
        outfile.write(line)
    if(line.find('<m:InventoryJVs>')!= -1):
        flag1 = 1
    if(flag1 == 1):
        if(line.find('<m:InventoryJV>') != -1):
            flag2 = 1
        if(line.find('</m:InventoryJV>') != -1):
            
            flag2 = 0
            start_link = data[3].find('<m:Description>')
            end_link = data[3].find('</m:Description>')
            value= data[3][start_link+15:end_link]
            if int(value) in tranids:
                for i in data:
                    if(i.find('<m:Amount>')== -1):
                        outfile.write(i)
                    else:
                        start_link = i.find('<m:Amount>')
                        end_link = i.find('</m:Amount>')
                        outfile.write(i[:start_link+10]+str(-1*float(i[start_link+10:end_link]))+i[end_link:])
                outfile.write(line)
            data = []
        if(flag2 == 1):
            data.append(line)
            
    if(line.find('</m:InventoryJVs>') != -1):
        outfile.write(line)
        flag1 = 0

infile.close()
outfile.close()
