local isVisible = true 

RegisterCommand("watermark", function()
    isVisible = not isVisible

    SendNUIMessage({
        action = "toggle",
        show = isVisible
    })

end, false)

RegisterNUICallback("closeUI", function()
    isVisible = false
    SendNUIMessage({
        action = "toggle",
        show = false
    })
end)


-- You can delete this it's just for support
print("Created by ^2Eyss^0");
print("Available on ^1evoludio.tebex.io^0");