﻿using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDLBTL.Common.Req
{
    public class SearchProductReq
    {
        public int Page { set; get; }
        public int Size { set; get; }
        public int Id { set; get; }
        public string Type { set; get; }
        public string Keyword { set; get; }
    }
}
