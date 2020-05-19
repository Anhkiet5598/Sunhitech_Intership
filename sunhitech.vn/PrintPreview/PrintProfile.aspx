<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PrintProfile.aspx.cs" Inherits="CMSWEB.PrintPreview.PrintProfile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        @font-face {
            font-family: 'Code 39-hoch-Logitogo';
            font-style: normal;
            font-weight: normal;
            src: url('/fonts/Code39-hoch-Logitogo.woff') format('woff');
        }

        @font-face {
            font-family: IDAutomationHC39M;
            src: url(/fonts/IDAutomationHC39M.woff);
        }
    </style>
    <script src="../Scripts/Modules/CMS/jquery-3.1.1.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">       
        <script type="text/javascript">
            var id = 'iframe'
            function print_pdf(url) {
                html = '<iframe id="' + id + '" src="' + url + '" style="width:100%; height:800px;" frameborder="0"></iframe>';
                $('body').append(html);
                //wait for the iFrame to fully load and call the print() function afterwards
                //iframe.contentWindow.print();
            }
            print_pdf("<%=dirUpload%>");
        </script>
    </form>
</body>
</html>
