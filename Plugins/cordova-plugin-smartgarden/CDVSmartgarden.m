#import "CDVSmartgarden.h"
#import <Cordova/CDVPlugin.h>
#import "ViewController.h"

@implementation CDVSmartgarden

- (void)changeTitle:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* title = [command.arguments objectAtIndex:0];

    if (title != nil && [title length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:title];
        
        ViewController *vc = (ViewController *)self.viewController.parentViewController;
        [vc.topNavigtion setTitle:title];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }
    
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
