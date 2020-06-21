var addTwoNumbers = function(l1, l2) {
    let head, current= head,  carry = 0;
  
      while(l1 || l2) {
          let fVal = 0, sVal= 0, sum = carry, next, tmpNode;
          if(l1.val){
              fVal= l1.val;
          }
          if(l2.val){
              y = l2.val;
          }
          sum =sum +  fVal+ y;
        
          carry = Math.floor(sum / 10);
          next = sum % 10;
          tmpNode = new ListNode(next);
          if(head == null){
              head =  new ListNode(next);
              current= head;
          }else{
              current.next = tmpNode;
              current= current.next;
          }
        if(l1.next != null){
          l1 = l1.next;
        }else{
          l1 = false
        }
        if(l2.next != null){
          l2 = l2.next;
        }else{
          l2 = false
        }
      }
      if(carry > 0){
          let tmpNode= new ListNode(carry);
          current.next = tmpNode;
      }
      return head;
  };