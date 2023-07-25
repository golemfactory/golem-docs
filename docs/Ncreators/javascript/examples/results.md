---
description: Working with results
---


Story:
  
  For each of the command run you can obtain a result object.

    example:

  Show the structure.

  if you run your tasks in batch, you will receive:
    events - (endStream)
    arrays of results objects.

      example ednStream

      example array 

  If you run your tasks in parallel: 
    you will obtain an iterable that will give you access to results of particular tasks.
      
  When your command fails exeunit will terminate whole tasks.
  Still you will get a result object, where the is an error message for the command that cause the failure.

    see example:  

  If you tasks failed you can use retrayStrategy to manage behaviour:
    default is to repeat the task n times (on other provider) if the exitcode does not indicate that the reson for the failure was a unexising command:

  Here you have example showing retrayStrategy usage (actual code is a default behaviour).

  Note that if you run your tasks in parallel using for [map] even if particular tasks would not be repeated the other tasks will be executed on the network.

  If you want to manage the flow depanding on the task output, you need to use (foreach) method.

  example
  
