/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // setup
        ListNode result = null;
        int carry = 0;
        
        /*
        Three functions
        1. Add nodes and add carry of present
        2. compute carry
        3. add the resultant to new list
        */
        
        while(l1.next != null || l2.next != null){
            int l1_elem = l1.next != null ? l1.val : 0;
            int l2_elem = l2.next != null ? l2.val : 0;
            int res_elem = l1_elem + l2_elem + carry;
            
            //pass carry to next iteration
            carry = computeCarry(res_elem);
            
            // compute the element if there is a carry
            // if added elem is 12 then 12%10 would be 2 and 12/10 would be 1
            // 2 is the current elem and 1 is the carry.
            if(carry > 0) {
                res_elem = res_elem %10;
            }
            
            // Trying to create a new node and pass in value;
            if(result == null) {
                result = new ListNode(res_elem);
            } else {
                // Simulating an add functionality,
                // this could be optimized since it will always run for all the elems
                // in the list for every add operation.
                ListNode tempNode = result;
                while(tempNode.next != null){
                    tempNode = tempNode.next;
                }
                tempNode.next = new ListNode(res_elem);
            }
        }
        return result;
    }
    
    // compute the carry digit.
    public int computeCarry(int inpt){
        int carry = 0;
        if(inpt > 10) {
            carry = inpt/10; 
        }
        return carry;
    }
}