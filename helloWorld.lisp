
(defun inputName() 
    (princ "USERNAME : ")
    (setq username (read-line))
)

(defun printName()
    (setq username (inputName))
    (write-line (concatenate 'string "hello " username))
)

