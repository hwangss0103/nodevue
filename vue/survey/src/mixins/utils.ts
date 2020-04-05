export const utils = {
    methods: {
        stateStr(s: number): string {
            let resultStr = '';
            if (!s) return '준비중';
            switch (s) {
                case 0:
                    
                    break;
                case 1:
                    resultStr = '오픈'
                    break;
                case 9:
                    resultStr = '삭제'
                    break;
          
            
                default:
                    break;
            }
            return resultStr;
        }
    },
}